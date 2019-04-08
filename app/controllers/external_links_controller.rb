class ExternalLinksController < ApplicationController
    before_action :set_entry, only: [:create, :destroy]
    before_action :set_external_link, only: [:destroy]

    def create
      @link = @entry.external_links.build(link_params)
      if @link.save
        redirect_to @entry, notice: 'Link successfully created.'
      else
        redirect_to @entry, alert: 'There was a problem.'
      end
    end

    def destroy
      @link.destroy
      redirect_to @entry, notice: "Link successfully removed"
    end

    private

    def set_entry
        @entry = Entry.find_by slug: params[:entry_slug]
    end

    def set_external_link
        @link = @entry.external_links.find(params[:id])
    end

    def link_params
        params.require(:external_link).permit(:description, :url)
    end

end