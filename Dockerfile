FROM ruby:2.5.3

RUN mkdir /app
WORKDIR /app

RUN gem install jekyll
RUN gem install jekyll-theme-cayman

ADD ./docs /app
